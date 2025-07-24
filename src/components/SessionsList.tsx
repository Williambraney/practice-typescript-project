import SessionsListItem from './SessionsListItem';

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

export default function SessionsList({ 
    sessions
}: ListProps ) {

    return (
        <ul 
            id = 'sessions-list'

        >
            {
                sessions.map( session => {
                    return (
                        <SessionsListItem 
                            session = { session }
                            key = { session.id }
                        />
                    );
                })
            }
        </ul>
    );
}