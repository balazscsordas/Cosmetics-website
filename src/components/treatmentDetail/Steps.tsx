import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

interface Props {
  steps?: string[]
}

const Steps = ({ steps }: Props) => {
  return (
    <>
      {steps && (
        <ul className="my-8">
          <h3 className="mb-4 font-medium">Lépések</h3>
          {steps.map((step, index) => (
            <li className="my-2 ml-4 flex items-center" key={index}>
              <ArrowRightAltIcon fontSize="small" className="mr-2" />
              {step}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Steps
