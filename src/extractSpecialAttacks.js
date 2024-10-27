export function extractSpecialAttacks(character) {
    return character.special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
        id,
        name,
        icon,
        description,
    }));
}
