import { usePathname } from "next/navigation"
import { RiLockPasswordLine } from 'react-icons/ri';
import {FaRegEdit,FaCar} from 'react-icons/fa'
import {MdCarRental} from 'react-icons/md'

export const getNavbarItems = () => {
  // Call usePathname within a functional component
  const pathname = usePathname();

  return [
    {
      href: `/Post`,
      label: 'Post',
      active: pathname === `/categories`,
      showdownarrow: true
    },
    {
      href: `/`,
      label: 'Category',
      active: pathname === `/brand`,
      showdownarrow: true
    },
    {
      href: `/news`,
      label: 'News',
      active: pathname === `/news`,
      showdownarrow: false
    },
    {
      href: `/predict`,
      label: 'Predict',
      active: pathname === `/news`,
      showdownarrow: false
    }
  ];
};
export const getuserinfodata = () => {
  const pathname = usePathname();

  return [
    {
      icons: FaRegEdit,
      href: `/ManageList`,
      label: 'Manage my car listing',
      active: pathname === `/manageslisting`,
      showdownarrow: true
    },
    {
      icons: FaCar,
      href: `/viewpurchase`,
      label: 'View Purchases ',
      active: pathname === `/view`,
      showdownarrow: true
    },
    {
      icons: FaCar,
      href: `/viewrented`,
      label: 'View Rented',
      active: pathname === `/view`,
      showdownarrow: true
    },
   
    // {
    //   icons: RiLockPasswordLine,
    //   href: `/changepassword`,
    //   label: 'Change Password',
    //   active: pathname === `/news`,
    //   showdownarrow: false
    // },

  ];
}
