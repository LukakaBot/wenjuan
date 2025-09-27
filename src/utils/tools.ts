import { Icon } from '@iconify/vue'

export function renderIcon({ icon, color, size }: { icon: string; color?: string; size?: number }) {
  return h(Icon, { icon, color, width: size, height: size })
}
