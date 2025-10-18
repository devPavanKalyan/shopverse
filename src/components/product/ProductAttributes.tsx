import AttributeGroupCard from "./AttributeGroup";

type AttributeGroup = {
  title: string;
  priority: number;
  values: Record<string, string>;
};

interface ProductAttributesProps {
  attributes: AttributeGroup[];
}

export default function ProductAttributes({ attributes }: ProductAttributesProps) {
  return (
    <div className="w-full mt-10 space-y-6">
      <h2 className="text-2xl font-semibold">Product Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {attributes
          .sort((a, b) => a.priority - b.priority)
          .map(({ title, values }) => (
            <AttributeGroupCard key={title} title={title} values={values} />
          ))}
      </div>
    </div>
  );
}
