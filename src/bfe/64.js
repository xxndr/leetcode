async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  try {
    const result = await fetcher();
    return result;
  } catch (e) {
    if (maximumRetryCount === 0) {
      return Promise.reject(e);
    }
    return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
  }
}

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetcher().catch((e) => {
    if (maximumRetryCount === 0) {
      return Promise.reject(e);
    }

    return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
  });
}
