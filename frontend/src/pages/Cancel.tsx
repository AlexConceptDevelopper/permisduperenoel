import { useNavigate } from 'react-router-dom';

export default function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-amber-500/30 rounded-2xl p-8 text-center shadow-xl">
        <div className="text-4xl mb-4">🦌</div>
        <h1 className="text-2xl font-bold text-amber-400 mb-2">Paiement annulé</h1>
        <p className="text-slate-300 text-sm mb-6">
          Tu as quitté la zone de paiement du Pôle Nord. Aucune somme n'a été prélevée. Le lutin en chef t'attend dès que tu es prêt !
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-colors shadow-lg cursor-pointer"
        >
          Retourner au formulaire 🎄
        </button>
      </div>
    </div>
  );
}