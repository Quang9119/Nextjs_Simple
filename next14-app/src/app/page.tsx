'use client';
import AddBlogModal from '@/components/AddBlogModal';
import AppTable from '@/components/app.table';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
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
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <main>
      <div>
        <AppTable blogs={data} />
      </div>
    </main>
  );
}
