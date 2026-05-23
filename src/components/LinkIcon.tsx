import { apply } from 'vicinage'
import { children, ParentComponent } from 'solid-js'

export const LinkIcon: ParentComponent = function (props) {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      {...apply({
        filter: {
          default: null,
          ['@media (prefers-color-scheme: dark)']: 'invert(1) brightness(2)',
        },
        height: '18px',
        width: '18px',
      })}
    >
      {children(() => props.children)()}
    </svg>
  )
}
