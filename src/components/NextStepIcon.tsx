import { apply } from 'vicinage'
import { children, ParentComponent } from 'solid-js'

export const NextStepIcon: ParentComponent = function (props) {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      {...apply({
        height: '22px',
        marginBottom: '16px',
        width: '22px',
      })}
    >
      {children(() => props.children)()}
    </svg>
  )
}
