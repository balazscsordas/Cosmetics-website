import { useEffect } from "react"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

const ScrollToTopButton = () => {
  const goTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("scrollToTheTop")!.style.display = "block"
    } else {
      document.getElementById("scrollToTheTop")!.style.display = "none"
    }
  }, [])

  return (
    <button
      onClick={goTop}
      type="button"
      className="fixed bottom-5 right-5 rounded-2xl bg-red-500 p-4 text-white transition-all"
      id="scrollToTheTop"
    >
      <ArrowUpwardIcon />
    </button>
  )
}

export default ScrollToTopButton
