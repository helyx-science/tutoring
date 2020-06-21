import { Box, Flex, Link as A } from 'rebass'
import { Styled, useColorMode } from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

const ColorButton = ({ mode, ...props }) => (
  <Box
    as="button"
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
        lineHeight: 0,
      ':hover, :focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none'
      }
    }}
  >
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </Box>
)

export default props => {
  const [mode, setMode] = useColorMode()

  return (
    <>
   
      <Flex
        as="header"
        variant="container"
        sx={{
          alignItems: 'center',
          px: 3,
          py: 4
        }}
      >
        <Avatar size={48} sx={{ mr: 3 }} />
        <Link href="/">
          <A variant="styles.navitem">Provided by The Helyx Initiative</A>
        </Link>
        <Box sx={{ mx: 'auto' }} />
       
        <ColorButton
          onClick={e => {
            const next = mode === 'dark' ? 'light' : 'dark'
            setMode(next)
          }}
        />
      </Flex>
      <Box
        as="main"
        sx={{
          width: '100%',
          maxWidth: 'container',
          px: 3,
          mx: 'auto',
          flex: '1 1 auto'
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto'
        }}
      >
        <Flex
          sx={{
            py: 4,
            justifyContent: 'center'
          }}
        >
          {/* <Avatar /> */}
          Original website generously created by Lachlan Campbell. Modifed by Andrew Gao.
          <A
            href="https://github.com/lachlanjc"
            title="GitHub"
            variant="styles.navitem"
            sx={{ mx: 2 }}
          >
            <Icon glyph="github" size={36} />
          </A>
        </Flex>
        {/*
        <Flex
          sx={{
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: 0
          }}
        >
          <Link href="/">
            <A variant="styles.navitem" sx={{ mr: 3 }}>
              @lachlanjc
            </A>
          </Link>
          <Link href="/about">
            <A variant="styles.navitem">About</A>
          </Link>
          <Box sx={{ mx: 'auto' }} />
          <Box sx={{ my: 2 }}>© 2019 Lachlan Campbell</Box>
        </Flex>
        */}
      </Box>
    </>
  )
}
