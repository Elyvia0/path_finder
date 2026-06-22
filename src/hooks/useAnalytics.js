import { useState, useEffect } from 'react';

export function useAnalytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return {
    data,
    loading,
    setData,
    setLoading
  };
}
