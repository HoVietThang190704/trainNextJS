export interface DropdownItem {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly hasDropdown?: boolean;
  readonly dropdownItems?: DropdownItem[];
}

export class NavItemEntity implements NavItem {
  constructor(
    public readonly label: string,
    public readonly href: string,
    public readonly hasDropdown?: boolean,
    public readonly dropdownItems?: DropdownItem[]
  ) {
    if (!label || label.trim() === '') {
      throw new Error('Nav item label is required');
    }
    if (!href || href.trim() === '') {
      throw new Error('Nav item href is required');
    }
    if (hasDropdown && (!dropdownItems || dropdownItems.length === 0)) {
      throw new Error('Dropdown items are required when hasDropdown is true');
    }
  }

  // Business logic methods
  isActive(currentPath: string): boolean {
    return this.href === currentPath;
  }

  hasChildren(): boolean {
    return Boolean(this.hasDropdown && this.dropdownItems && this.dropdownItems.length > 0);
  }

  getChildrenCount(): number {
    return this.dropdownItems?.length || 0;
  }
}