export interface NavItem {
    label: string
    href: string
    hasDropdown?: boolean
    dropdownItems?: DropdownItem[]
}

export interface DropdownItem {
    label: string
    href: string
    description?: string
}