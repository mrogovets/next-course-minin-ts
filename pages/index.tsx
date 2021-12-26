import React from "react";
import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={"Home Page"}>
      <h1>Hello Next.JS</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        vel totam blanditiis rem eum dolores unde ratione saepe neque assumenda.
      </p>
    </MainLayout>
  );
}
