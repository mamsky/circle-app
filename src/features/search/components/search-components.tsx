import { InputGroup } from '@/components/ui/input-group';
import { searchUserDatas } from '@/utils/fake-data/user-search-data';
import { Box, Input } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
import React, { Suspense, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import CardSkeleton from '../skeleton/card-skeleton';
import { SearchUser } from '../types/search-user-types';

const CardUser = React.lazy(() => import('@/components/card-user'));
const SearchComponents = () => {
  const [search, setSearch] = useState<string>('');
  const [searchTextDebounce] = useDebounce(search, 300);
  const [searchDataUser, setSearchDataUser] = useState<SearchUser[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearchDataUser(
      searchUserDatas.filter(
        (user) =>
          user.fullName
            .toLowerCase()
            .includes(searchTextDebounce.toLowerCase().trim()) ||
          user.username
            .toLowerCase()
            .includes(searchTextDebounce.toLowerCase().trim())
      )
    );
  }, [searchTextDebounce]);

  return (
    <Box>
      <InputGroup startElement={<LuSearch />} w={'full'}>
        <Input
          onChange={handleChange}
          placeholder="Search contacts"
          rounded={'15px'}
        />
      </InputGroup>

      {searchDataUser.map((user) => (
        <Suspense key={user.id} fallback={<CardSkeleton />}>
          <CardUser data={user} />
        </Suspense>
      ))}
    </Box>
  );
};

export default SearchComponents;
