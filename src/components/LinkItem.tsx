import { apply } from 'vicinage'
import { children, ParentComponent } from 'solid-js'

export const LinkItem: ParentComponent = function (props) {
  return (
    <li
      {...apply({
        flex: {
          default: '1 1 calc(50% - 8px)',
          '@media (width >= 1024px)': 'initial',
        },
      })}
    >
      {children(() => props.children)()}
    </li>
  )
}
