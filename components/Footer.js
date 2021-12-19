import { useStyletron } from 'baseui';

export default function Footer() {
  const [css, theme] = useStyletron()

  return (
    <div className={css({maxWidth: "750px", margin: "auto"})}>
      <hr></hr>
      <footer className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      })}>  
        <div>E-mail: mengzhen@uchicago.edu</div><div>copyrigh@2021</div>
      </footer>
    </div>
  )
}
