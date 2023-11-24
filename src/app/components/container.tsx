interface ContainerProps {
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ title, className, children }) => {
    return (
        <div className={className}>
            <h1 className="border-b flex p-4 text-4xl items-center justify-center bg-gradient-to-r from-white to-sky-600 text-transparent bg-clip-text">{title}</h1>
            {children}
        </div>
    );
};

export default Container;