import {
	Forked as ForkedEvent,
	Minted as MintedEvent,
} from '../generated/CollaBeatUtility/CollaBeatUtility';
import { Forked, Minted } from '../generated/schema';

export function handleForked(event: ForkedEvent): void {
	let entity = new Forked(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.from = event.params.from;
	entity.tokenId = event.params.tokenId;
	entity.dataKey = event.params.dataKey;
	entity.cid = event.params.cid;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMinted(event: MintedEvent): void {
	let entity = new Minted(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.from = event.params.from;
	entity.tokenId = event.params.tokenId;
	entity.amount = event.params.amount;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}
