/**
 * Discord Snowflake (ID) logic.
 * Discord IDs are 64-bit integers.
 * Bits 22-63: Timestamp (milliseconds since Discord Epoch: 1420070400000)
 * Bits 17-21: Internal worker ID
 * Bits 12-16: Internal process ID
 * Bits 0-11: Incrementing counter
 */

const DISCORD_EPOCH = 1420070400000;

export interface SnowflakeInfo {
  timestamp: number;
  date: Date;
  workerId: number;
  processId: number;
  increment: number;
}

/**
 * Parses a Discord Snowflake ID into its components.
 */
export function parseSnowflake(snowflake: string | bigint): SnowflakeInfo | null {
  try {
    const id = BigInt(snowflake);
    if (id < 0n) return null;

    const timestamp = Number((id >> 22n) + BigInt(DISCORD_EPOCH));
    const workerId = Number((id & 0x3E0000n) >> 17n);
    const processId = Number((id & 0x1F000n) >> 12n);
    const increment = Number(id & 0xFFFn);

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return null;

    return {
      timestamp,
      date,
      workerId,
      processId,
      increment,
    };
  } catch {
    return null;
  }
}

/**
 * Validates if a string is a valid Discord Snowflake.
 */
export function isValidSnowflake(snowflake: string): boolean {
  if (!/^\d{17,20}$/.test(snowflake)) return false;
  try {
    const id = BigInt(snowflake);
    return id > 0n;
  } catch {
    return false;
  }
}
