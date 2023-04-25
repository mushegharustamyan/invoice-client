import { BadgeIcon, ChevronDownIcon, FiltersIcon } from '@fluentui/react-icons-mdl2'

import { unregisterIcons, registerIcons } from '@fluentui/react/lib/Styling';

unregisterIcons(['ChevronDown', "Filter"]);

registerIcons({
  icons: {
    ChevronDown: <ChevronDownIcon />,
    ANewIconName: <BadgeIcon />,
    Filter: <FiltersIcon />
  },
});