import { useStyletron } from 'baseui';
import {CurrentPosition} from 'data/resume/CurrentPosition.js';
import {Grid, Cell} from 'baseui/layout-grid';


export default function CurrentJob() {
    const [css, theme] = useStyletron()

    return (
        <div className = {css({ marginBottom: theme.sizing.scale1000})}>
            <div className={css({fontSize: theme.typography.HeadingXSmall.fontSize })}>
                <p><b>CURRENT POSITION</b></p>
            </div>
            <div className={css({
                display: 'flex', fontSize: theme.typography.ParagraphLarge.fontSize, 
                justifyContent: 'space-between',
                marginBottom: theme.sizing.scale200
                })}>
                <div><b>{CurrentPosition.title}</b></div>
                <div>{CurrentPosition.duration}</div>
            </div>
            <div className={css({
                fontSize: theme.typography.ParagraphLarge.fontSize,
                marginBottom: theme.sizing.scale200
                })}>{CurrentPosition.affiliation}</div>
            <div className={css({fontSize: theme.typography.ParagraphLarge.fontSize})}>
                <ul className={css({marginTop: theme.sizing.scale200})}>
                    <li>
                        {CurrentPosition.description}
                    </li>
                </ul>
            </div>
        </div>
    )
}
