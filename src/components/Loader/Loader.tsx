import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperStyle={{
                position: 'absolute',
                top: '40%',
                left: '30',
                width: '100%',
                margin: '0 auto',
                zIndex: '1',
            }}
            colors={['#BFD087', '#688800','#BFD087', '#688800', '#BFD087' ]}
        />
    );
};