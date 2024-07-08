import { renderHook, act } from '@testing-library/react';
import { expect, it, describe, afterEach, vi } from 'vitest';
import { useNow } from '../use-now';

vi.useFakeTimers();

describe('useNow', () => {
  afterEach(() => {
    vi.clearAllTimers();
    vi.restoreAllMocks();
  });

  it('should return the current date by default', () => {
    const { result } = renderHook(() => useNow());
    expect(result.current).toBeInstanceOf(Date);
  });

  it('should update the date every second by default', () => {
    const { result } = renderHook(() => useNow());
    const initialDate = result.current;

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current).not.toBe(initialDate);
    expect(result.current.getTime() - initialDate.getTime()).toBe(1000);
  });

  it('should update the date based on the specified interval', () => {
    const { result } = renderHook(() => useNow({ interval: 2000 }));
    const initialDate = result.current;

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current).not.toBe(initialDate);
    expect(result.current.getTime() - initialDate.getTime()).toBe(2000);
  });

  it('should update the date using requestAnimationFrame when interval is set to "requestAnimationFrame"', () => {
    const { result } = renderHook(() =>
      useNow({ interval: 'requestAnimationFrame' }),
    );
    const initialDate = result.current;

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(result.current).not.toBe(initialDate);
  });

  it('should return controls when the controls option is set to true', () => {
    const { result } = renderHook(() => useNow({ controls: true }));
    expect(result.current).toHaveProperty('now');
    expect(result.current).toHaveProperty('pause');
    expect(result.current).toHaveProperty('resume');
  });

  it('should pause and resume the date updates when using controls', () => {
    const { result } = renderHook(() => useNow({ controls: true }));
    const initialDate = result.current.now;

    act(() => {
      result.current.pause();
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.now).toBe(initialDate);

    act(() => {
      result.current.resume();
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.now).not.toBe(initialDate);
  });

  it('should clear timers when the hook is unmounted', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    const { unmount } = renderHook(() => useNow());
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });

  it('should clear requestAnimationFrame timer when unmounted', () => {
    const cancelAnimationFrameSpy = vi.spyOn(global, 'cancelAnimationFrame');
    const { unmount } = renderHook(() =>
      useNow({ interval: 'requestAnimationFrame' }),
    );
    unmount();
    expect(cancelAnimationFrameSpy).toHaveBeenCalled();
    cancelAnimationFrameSpy.mockRestore();
  });

  it('should throw an error for invalid interval value', () => {
    expect(() => {
      renderHook(() => useNow({ interval: -100 }));
    }).toThrowError('useNow: interval must be a positive number');
  });
});
