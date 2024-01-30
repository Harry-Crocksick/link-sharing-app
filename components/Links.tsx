import Link from "./Link";

export default function Links() {
  return (
    <div className="grid grid-cols-3 gap-4 py-6">
      <div className="col-span-full lg:col-span-1">
        <div className="sticky top-8">
          <h1 className="text-black text-lg">Links</h1>
          <p className="text-sm text-gray-500">Add some links here</p>
          <small>
            Icon keys can be found in{" "}
            <a
              href="https://icones.js.org/"
              target="_blank"
              className="underline hover:text-slate-700"
            >
              https://icones.js.org/
            </a>
            .{" "}
          </small>
        </div>
      </div>
      <Link />
    </div>
  );
}
