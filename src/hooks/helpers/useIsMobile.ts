const useIsMobile = () => {
  if (typeof window !== 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
}

export default useIsMobile
