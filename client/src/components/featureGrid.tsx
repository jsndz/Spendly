export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-4 auto-rows-[180px] gap-6">
      <div className="col-span-2 row-span-2 bg-slate-300 rounded-xl" />

      {/* Wide */}
      <div className="col-span-2 bg-slate-300 rounded-xl" />

      {/* Small */}
      <div className="col-span-2 row-span-2 bg-slate-300 rounded-xl" />
    

      {/* Wide bottom */}
      <div className="col-span-2 bg-slate-300 rounded-xl" />

      {/* Small */}

    </div>
  );
};
