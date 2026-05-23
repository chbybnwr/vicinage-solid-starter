/* eslint-disable @typescript-eslint/no-explicit-any */

import { apply } from 'vicinage'
import { Start } from './examples/Start'
import { Hello } from './examples/Hello'
import { Pseudo } from './examples/Pseudo'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { Logical } from './examples/Logical'
import { Dynamic as RuntimeDynamic } from './examples/Dynamic'
import { Responsive } from './examples/Responsive'
import { RootLayout } from './Layout'
import { createSignal } from 'solid-js'
import { Dynamic } from 'solid-js/web'

const examples: Record<string, any> = {
  Start,
  Hello,
  Pseudo,
  Logical,
  Dynamic: RuntimeDynamic,
  Responsive,
}

export default function Home() {
  const [selectedExample, setSelectedExample] = createSignal('Start')

  return (
    <RootLayout>
      <div
        {...apply({
          gap: spacing[8],
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
        })}
      >
        <Dynamic component={examples[selectedExample()]} />
      </div>
      <div
        {...apply({
          paddingBlock: spacing[2],
          display: 'flex',
          justifyContent: 'space-around',
        })}
      >
        {Object.keys(examples).map((key) => (
          <button
            onClick={() => setSelectedExample(key)}
            {...apply({
              textDecoration: selectedExample() === key && 'underline',
              color: selectedExample() === key && color.blue500,
            })}
          >
            {key}
          </button>
        ))}
      </div>
    </RootLayout>
  )
}
