import {HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem} from 'baseui/header-navigation';
import {StyledLink} from 'baseui/link';
import { useStyletron } from 'baseui';

export default function Header({ title }) {
  const [css, theme] = useStyletron()

  return (
    <div>
      <div className = {css({fontSize: theme.typography.HeadingLarge.fontSize, textAlign : "center", marginTop: theme.sizing.scale800})}>
        {title}
      </div>
     <HeaderNavigation className = {css({marginBottom: theme.sizing.scale800, paddingTop: theme.sizing.scale0})}>

            {/* Blank place holder */}
            {/* <StyledNavigationList $align={ALIGN.center} /> */}

            {/* Tabs */}
            <StyledNavigationList $align={ALIGN.left}>
              <StyledNavigationItem>
                <StyledLink href="/">
                  About me
                </StyledLink>
              </StyledNavigationItem>
              <StyledNavigationItem>
                <StyledLink href="/contact">
                  Contact me
                </StyledLink>
              </StyledNavigationItem>
            </StyledNavigationList>

            {/* Button */}
            {/* <StyledNavigationList $align={ALIGN.right}>
              <StyledNavigationItem>
                <Button>Get started</Button>
              </StyledNavigationItem>
            </StyledNavigationList> */}

          </HeaderNavigation>
          </div>
    )
}
