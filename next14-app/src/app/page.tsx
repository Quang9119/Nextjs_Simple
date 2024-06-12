'use client';
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
  console.log(data);
  return (
    <main>
      <div>
        <div>{data?.length}</div>
        <h1>Home page </h1>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </main>
  );
}
