import { Image } from 'rebass'

export default ({ size = 32, ...props }) =>
  <Image
    {...props}
src="https://cdn.glitch.com/04bc4c8d-1ea4-4299-b93b-d6e06d1a1970%2FCopy%20of%20helyx.png?v=1585690250958"  
    width={size}
    height={size}
    sx={{ borderRadius: 'circle', overflow: 'hidden', ...props.sx }}
  />
