type Props = {
  current?: string;
};

const OHRowThree: React.FC<Props> = ({ current = "orders" }) => {
  return (
    <div>
      {current === "orders" && <>Hello</>}
      {current === "not-yet-shipped" && <>World</>}
    </div>
  );
};

export default OHRowThree;
