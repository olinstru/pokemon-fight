export function load({ url }) {
	const uuid1 = url.searchParams.get('uuid1');
	const uuid2 = url.searchParams.get('uuid2');
	console.log('uuid1', uuid1, 'uuid2', uuid2);
	return { uuid1, uuid2 }; 
}