import { Grid, GridItem } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import SidebarLeft from './sidebar-left';
import SidebarRight from './sidebar-right';
import { useAuthStore } from '@/stores/auth.store';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { api } from '@/hooks/api';
import { isAxiosError } from 'axios';
import { toaster } from './ui/toaster';
const Layout = () => {
  const {
    user: { username },
    setUser,
    logout,
  } = useAuthStore();

  const { isFetched } = useQuery({
    queryKey: ['check-auth'],
    queryFn: async () => {
      try {
        const token = Cookies.get('token');
        const response = await api.post(
          '/auth/check',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data.data);
        return response.data;
      } catch (error) {
        Cookies.remove('token');
        logout();
        if (isAxiosError(error))
          return toaster.create({
            title: error.message,
            type: 'error',
          });
      }
    },
  });

  if (isFetched) {
    if (!username) return <Navigate to={'/login'} />;
    return (
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={1} p={'40px'}>
          <SidebarLeft />
        </GridItem>
        <GridItem
          colSpan={3}
          minH={'100vh'}
          borderX={'1px solid'}
          borderColor={'gray'}
          p={'40px 20px'}
        >
          <Outlet />
        </GridItem>
        <GridItem colSpan={1}>
          <SidebarRight />
        </GridItem>
      </Grid>
    );
  }
  // return <></>;
};

export default Layout;
