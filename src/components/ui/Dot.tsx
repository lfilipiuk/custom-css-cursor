type DotProps = {
    className?: string
}
const Dot = ({ className } : DotProps) => (
    <div className={`w-2 h-2 rounded-full ${className}`} />
);

export default Dot;