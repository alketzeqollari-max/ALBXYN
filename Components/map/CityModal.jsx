import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Sparkles, BookOpen, X } from 'lucide-react';

export default function CityModal({ city, isOpen, onClose, wisdomData }) {
    if (!city) return null;

    const regionColors = {
        Veri: 'bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-400',
        Qendër: 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400',
        Jug: 'bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-400',
    };

    const regionLabels = {
        Veri: 'Veriu',
        Qendër: 'Qendra',
        Jug: 'Jugu',
    };

    // Check if we have wisdom data for this city
    const hasWisdom = wisdomData && wisdomData.wise_words && wisdomData.wise_words.length > 0;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg">
                            <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                            <DialogTitle className="text-2xl font-bold">{city.name}</DialogTitle>
                            <Badge className={`mt-1 ${regionColors[city.region]}`}>
                                {regionLabels[city.region]}
                            </Badge>
                        </div>
                        <button
                            onClick={() => onClose(false)}
                            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </DialogHeader>

                <div className="space-y-6">
                    {/* City Info Card */}
                    <Card className="border-2 border-red-200 dark:border-red-900/30">
                        <CardContent className="p-6">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">
                                        Rajoni
                                    </p>
                                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                                        {regionLabels[city.region]}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">
                                        Koordinatat
                                    </p>
                                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                                        {city.x}, {city.y}
                                    </p>
                                </div>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300">
                                Eksploroni mençurinë lokale dhe fjalë të urta nga {city.name}, një qytet i rëndësishëm në {regionLabels[city.region]} të Shqipërisë.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Wisdom Section */}
                    {hasWisdom ? (
                        <Card className="border-2 border-amber-200 dark:border-amber-900/30">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-5 h-5 text-amber-500" />
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        Fjalë të Urta
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {wisdomData.wise_words.map((wisdom, idx) => (
                                        <div key={idx} className="border-l-4 border-amber-500 pl-4">
                                            <p className="text-sm font-semibold text-amber-700 dark:text-amber-500 mb-1">
                                                Thënie
                                            </p>
                                            <p className="text-slate-900 dark:text-white mb-2">
                                                "{wisdom.text}"
                                            </p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                                                <strong>Kuptimi:</strong> {wisdom.meaning}
                                            </p>
                                            {wisdom.origin && (
                                                <p className="text-xs text-slate-500 dark:text-slate-500">
                                                    <strong>Origjina:</strong> {wisdom.origin}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="border-2 border-slate-200 dark:border-slate-700">
                            <CardContent className="p-6 text-center">
                                <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                                <p className="text-slate-600 dark:text-slate-400">
                                    Nuk ka ende fjalë të urta të regjistruara për këtë qytet.
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
