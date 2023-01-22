import { useSelector } from 'react-redux';

const Wrapper = ({children}) => {

    const { openSidebar, sidebarWidth, screeSize } = useSelector(
        (state) => state.sidebarSlice
      );
    

    return (
        <div  style={{
            paddingLeft: openSidebar && screeSize > 992 ? sidebarWidth : '0',
            transition: 'all .3s ease-in-out'
          }}>
            {children}
        </div>
    )
}

export default Wrapper;