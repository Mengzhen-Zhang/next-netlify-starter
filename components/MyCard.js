import { useStyletron } from 'baseui';

const MyCard = ({title, content}) => {
  const [css, theme] = useStyletron()

  return (
   <div className = {css({ marginBottom: theme.sizing.scale1000})}>
     <div className = {css({ fontSize: theme.typography.HeadingXSmall.fontSize})}>
       ▣ <b> {title} </b>
     </div>
     <div className = {css({fontSize: theme.typography.ParagraphLarge.fontSize})}>
       {content}
     </div>
   </div> )
}

export default MyCard;