'use client';
import AppTable from '@/components/app.table';
import Link from 'next/link';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useSWR from 'swr';
export default function Home() {
  const API_URL_GET_BLOGS = 'http://localhost:8000/blogs';
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(API_URL_GET_BLOGS, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (!data) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <main>
      <div>
        <div>{data?.length}</div>
        <h1>Home page </h1>

        <AppTable blogs={data}/>
      </div>
    </main>
  );
}
