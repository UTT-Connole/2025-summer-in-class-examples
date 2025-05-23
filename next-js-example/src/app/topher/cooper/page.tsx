import Image from 'next/image';

const Cooper = () => {
    return (
        <div>
        <h1>Cooper</h1>
        <p>Cooper is a dog.</p>
        <Image
            src="/cooper.jpg"
            alt="Cooper"
            width={100}
            height={100}
            />
        </div>
    );
}

export default Cooper;