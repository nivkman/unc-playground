export default function Example({ platform, args }) {
    return (
        <div>
            <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Example for {platform}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Sending notification to {platform} requires this data.</p>
            </div>
            <div className="mt-5 border-t border-gray-200">
                <dl className="sm:divide-y sm:divide-gray-200">
                    {args.map((arg,i) =>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5" key={i}>
                            <dt className="text-sm font-medium text-gray-500">{arg.title}</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{arg.example}</dd>
                        </div>
                    )}
                </dl>
            </div>
        </div>
    )
}
