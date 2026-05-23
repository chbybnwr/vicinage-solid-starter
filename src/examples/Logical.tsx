import { apply } from 'vicinage'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { transition } from 'solarwindcss'
import { createSignal } from 'solid-js'

export function Logical() {
  const [isRound, setIsRound] = createSignal(false)

  return (
    <>
      <button
        {...apply(
          {
            borderRadius: isRound() && '50%',
            alignItems: 'center',
            aspectRatio: 1,
            backgroundColor: color.green500,
            display: 'flex',
            justifyContent: 'center',
            width: spacing[32],
          },
          transition.all,
          //
        )}
        onClick={() => setIsRound(!isRound())}
      ></button>
      <div>click it</div>
    </>
  )
}
