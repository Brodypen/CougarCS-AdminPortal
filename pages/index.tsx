import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import { AiOutlineDashboard, AiOutlineUnorderedList, AiOutlineUserAdd, AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Home: NextPage = () =>
{
  const router = useRouter();
  const supabase = useSupabaseClient();

  return (
    <Layout title="Home">
      <div className="my-10 mx-auto max-w-md space-y-8">
        <div className="block mx-auto w-fit">
          <Image
            src="/images/CougarCS-logo.png"
            alt="CougarCS Logo"
            width={150}
            height={150}
          />
        </div>
        <h1 className="mt-4 font-bold text-white text-center text-4xl">
          <span className="text-red-500">CougarCS</span> Admin Portal
        </h1>

        <button onClick={() => router.push("/dashboard")}
          className="flex justify-center w-full text-white font-semibold text-sm h-9 rounded-sm bg-red-600 hover:bg-red-700 space-x-2">
          <AiOutlineDashboard className=" my-auto" />
          <span className="my-auto">
            Dashboard
          </span>
        </button>

        <button onClick={() => router.push("/dashboard/members")}
          className="flex justify-center w-full text-white font-semibold text-sm h-9 rounded-sm bg-red-600 hover:bg-red-700 space-x-2">
          <AiOutlineUnorderedList className="my-auto" />
          <span className="my-auto">
            Members
          </span>
        </button>

        <button onClick={() => router.push("/dashboard/signup")}
          className="flex justify-center w-full text-white font-semibold text-sm h-9 rounded-sm bg-red-600 hover:bg-red-700 space-x-2">
          <AiOutlineUserAdd className="my-auto" />
          <span className="my-auto">
            Sign Up
          </span>
        </button>

        <button onClick={ async ()=> {
            const { error } = await supabase.auth.signOut()
            router.push('/login')
          }}
          className="flex justify-center w-full text-white font-semibold text-sm h-9 rounded-sm bg-red-600 hover:bg-red-700 space-x-2">
          <AiOutlineLogout className="my-auto" />
          <span className="my-auto">
            Logout
          </span>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
