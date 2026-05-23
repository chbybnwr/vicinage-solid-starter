import { apply } from 'vicinage'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { transition } from 'solarwindcss'
import { createEffect, createSignal } from 'solid-js'

export function Dynamic() {
  const [percentage, setPercentage] = createSignal(0)

  createEffect(() => {
    if (percentage() > 100) {
      setPercentage(0)
    }
  })

  return (
    <>
      <button
        onClick={() => {
          setPercentage(percentage() + 10)
        }}
        {...apply(
          {
            '--initial-size': spacing[32],
            borderRadius: 'var(--initial-size)',
            backgroundColor: color.yellow500,
            display: 'flex',
            justifyContent: 'end',
            height: 'var(--initial-size)',
            minWidth: 'var(--initial-size)',
            width: () =>
              `calc(var(--initial-size) + ${percentage()} / 100 * (100% - var(--initial-size)))`,
          },
          transition.all,
          //
        )}
      ></button>
      <div>click it</div>
    </>
  )
}
