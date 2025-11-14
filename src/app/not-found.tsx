import Link from "next/link";
import Layout from "@/components/Layout";
import { textClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className={cn("text-6xl font-bold mb-4", textClass("text"))}>
          404
        </h1>
        <p className={cn("text-xl mb-8", textClass("muted"))}>
          شرکت یافت نشد
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
        >
          بازگشت به داشبورد
        </Link>
      </div>
    </Layout>
  );
}
