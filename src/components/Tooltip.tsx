import './Tooltip.css';

interface Props {
  children: any;
  text: string
}

const Tooltip = ({ text, children }: Props) => {
  return (
    <div className="tooltip">
      <div className="tooltip-content">{children}</div>
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;