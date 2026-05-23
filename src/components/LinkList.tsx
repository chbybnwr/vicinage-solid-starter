import { apply } from 'vicinage'
import { children, ParentComponent } from 'solid-js'

export const LinkList: ParentComponent = function (props) {
  return (
    <ul
      {...apply({
        padding: 0,
        gap: '8px',
        listStyle: 'none',
        display: 'flex',
        flexWrap: {
          default: 'wrap',
          '@media (width >= 1024px)': 'initial',
        },
        justifyContent: {
          default: 'center',
          '@media (width >= 1024px)': 'initial',
        },
        marginTop: {
          default: '20px',
          '@media (width >= 1024px)': '32px',
        },
      })}
    >
      {children(() => props.children)()}
    </ul>
  )
}
