import { apply } from 'vicinage'
import type { StyleXStyles } from '@stylexjs/stylex'
import { children, ParentComponent } from 'solid-js'

export const NextStep: ParentComponent<{ style?: StyleXStyles }> = function (
  props,
) {
  return (
    <div
      {...apply(
        {
          paddingBlock: '24px',
          paddingInline: {
            default: '20px',
            '@media (width >= 1024px)': '32px',
          },
          flexBasis: '0',
          flexGrow: '1',
          flexShrink: '1',
        },
        props.style,
      )}
    >
      {children(() => props.children)()}
    </div>
  )
}
