import { useState, useEffect, useRef } from 'react';

export interface UseBluetoothRequestDeviceOptions {
  filters?: BluetoothLEScanFilter[];
  optionalServices?: BluetoothServiceUUID[];
}

export interface UseBluetoothOptions extends UseBluetoothRequestDeviceOptions {
  acceptAllDevices?: boolean;
}

export interface UseBluetoothReturn {
  isSupported: boolean;
  isConnected: boolean;
  device: BluetoothDevice | undefined;
  requestDevice: () => Promise<void>;
  server: BluetoothRemoteGATTServer | undefined;
  error: unknown | null;
}

export function useBluetooth(
  options?: UseBluetoothOptions,
): UseBluetoothReturn {
  const [isSupported, setIsSupported] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [device, setDevice] = useState<BluetoothDevice>();
  const [server, setServer] = useState<BluetoothRemoteGATTServer>();
  const [error, setError] = useState<unknown | null>(null);

  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    setIsSupported(Boolean(navigator.bluetooth));
  }, []);

  const requestDevice = async () => {
    try {
      abortController.current = new AbortController();
      setError(null);
      const device = await navigator.bluetooth.requestDevice({
        filters: options?.filters,
        optionalServices: options?.optionalServices,
        acceptAllDevices: options?.acceptAllDevices ?? false,
      });
      setDevice(device);
      const server = await device.gatt?.connect();
      setServer(server);
      setIsConnected(true);
    } catch (error) {
      setError(error);
      console.error('Error requesting Bluetooth device:', error);
    }
  };

  useEffect(() => {
    const handleDisconnect = () => {
      setIsConnected(false);
      setDevice(undefined);
      setServer(undefined);
    };

    device?.addEventListener('gattserverdisconnected', handleDisconnect);

    return () => {
      device?.removeEventListener('gattserverdisconnected', handleDisconnect);
      abortController.current?.abort();
    };
  }, [device]);

  return {
    isSupported,
    isConnected,
    device,
    requestDevice,
    server,
    error,
  };
}
