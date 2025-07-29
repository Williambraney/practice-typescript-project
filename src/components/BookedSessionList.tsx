import BookedSessionListItem from './BookedSessionListItem';

export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
}

type ListProps = {
    sessions : Session[]
};

export default function BookedSessionList({ 
    sessions
}: ListProps ) {

    if (sessions.length === 0) {
        return <p>No booked sessions.</p>;
    }

    return (
        <>
            <ul 
                id = 'sessions-list'
            >
                {
                    sessions.map( session => {
                        return (
                            <BookedSessionListItem
                                session = { session }
                                key = { session.id }
                            />
                        );
                    })
                }
            </ul>
        </>
    );
}