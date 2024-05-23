import { DetailsRoomId } from '../../../components/detailsRoom/DetailsRoom';

export default function DetailsRoom({ id }: { id: string }) {
    return (
        <div>
            <DetailsRoomId id={id} />
        </div>
    );
}